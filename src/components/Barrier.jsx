import {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef
} from "react";

const Barrier = forwardRef(({ out, setOut }, ref) => {
  const viewerRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const openBarrier = () => {
    const viewer = viewerRef.current;
    if (!viewer || isAnimating) return;

    setIsAnimating(true);

    viewer.timeScale = 1.0;
    viewer.pause();
    viewer.play({
      repetitions: 1,
      direction: "normal",
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  // ---- App.jsx uchun tashqariga funksiyalar beriladi ----
  useImperativeHandle(ref, () => ({
    openBarrier
  }));

  // ---- API orqali KIRISH vaqtida avtomatik ochish ----
  useEffect(() => {
    // Faqat kiraverishda (out === false) va animatsiya ishlamayotganda
    if (out === true ) {
      fetch("https://682739736b7628c5290f890c.mockapi.io/cars")
        .then((res) => res.json())
        .then((data) => {
          console.log("API keldi:", data);
          openBarrier();
        })
        .catch((error) => {
          console.error("API xatolik:", error);
        });
    }
    setTimeout(() => {
      setOut(false)
    }, 15000)
  }, [out]);

  // ---- Kamera sozlash ----
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoad = () => {
      viewer.cameraOrbit = "-35deg 75deg 100m";
      viewer.cameraTarget = "3.2m 0m 0.7m";
      console.log("Model yuklandi va kamera sozlandi.");
    };

    viewer.addEventListener("load", handleLoad);
    return () => viewer.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="w-full p-4 relative">
      {/* CHIQISHDA qo‘l bilan ochiladi */}
      <button
        onClick={() => openBarrier()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Manual Ochish (Chiqish)
      </button>

      {/* Rejimni o‘zgartirish */}
      <button
        onClick={() => setOut(!out)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 ml-3"
      >
        OUT: {out ? "TRUE — Chiqish" : "FALSE — Kirish"}
      </button>

      <model-viewer
        ref={viewerRef}
        src="/models/kk.glb"
        animation-name="Low Poly Vehicle Barrier"
        style={{ width: "700px", height: "400px" }}
      ></model-viewer>
    </div>
  );
});

export default Barrier;
