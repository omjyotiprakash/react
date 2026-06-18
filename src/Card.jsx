import { IoStar } from "react-icons/io5";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Santorini Villa",
      description:
        "Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and a private infinity pool for ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      rating: 4.5,
      badge: null,
      duration: "3 Night Stay",
    },
    {
      id: 2,
      title: "Swiss Chalet",
      description:
        "Cozy wooden chalet nestled in the Swiss Alps, offering a warm fireplace, scenic mountain views, and direct access to ski slopes.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      rating: null,
      badge: "Guest Favorite",
      duration: "4 Night Stay",
    },
  ];

  return (
    <div className="h-screen bg-[#EAECEB] flex items-center justify-center gap-8 flex-wrap p-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-72 h-120 rounded-[28px] overflow-hidden shadow-2xl shadow-black/40"
        >
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(20,28,18,0.55)] to-[rgba(15,22,14,0.94)]" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
            <h2 className="text-white font-bold text-2xl mb-2 leading-tight tracking-tight">
              {card.title}
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              {card.description}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                {card.rating ? (
                  <>
                    <span className="text-white text-sm font-semibold">{card.rating}</span>
                    <span className="text-white text-xs tracking-widest"><IoStar /></span>
                  </>
                ) : (
                  <>
                    <span className="text-white text-sm">🏆</span>
                    <span className="text-white text-sm font-medium">{card.badge}</span>
                  </>
                )}
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                <span className="text-white text-sm font-medium">{card.duration}</span>
              </div>
            </div>
            <button className="w-full bg-white text-gray-900 font-semibold text-base rounded-full py-3.5 hover:bg-gray-100 active:scale-95 transition-all duration-200">
              Reserve now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;