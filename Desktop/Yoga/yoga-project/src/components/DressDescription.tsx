import { useParams } from 'react-router-dom';
import VelvetCover from '../assets/VelvetCover.png'
import Velvet1 from '../assets/Velvet1.png'
import Velvet2 from '../assets/Velvet2.png'
import Velvet3 from '../assets/Velvet3.png'
import Orange1 from '../assets/Orange/Orange1.jpeg'
import Orange2 from '../assets/Orange/Orange2.jpeg'
import Orange3 from '../assets/Orange/Orange3.jpeg'
import OrangeCover from '../assets/Orange/OrangeCover.jpeg'
import BlueCover from '../assets/Blue/BlueCover.jpeg'
import Blue1 from '../assets/Blue/Blue1.jpeg'
import Blue2 from '../assets/Blue/Blue2.jpeg'
import Blue3 from '../assets/Blue/Blue3.jpeg'
import CreamCover from '../assets/Ivory/CreamCover.jpeg'
import Cream1 from '../assets/Ivory/Cream1.jpeg'
import Cream2 from '../assets/Ivory/Cream2.jpeg'
import Cream3 from '../assets/Ivory/Cream3.jpeg'
import PurpleCover from '../assets/Purple/Purple1.png'
import Purple1 from '../assets/Purple/Purple1.png'
import Purple2 from '../assets/Purple/Purple2.png'
import Purple3 from '../assets/Purple/Purple3.png'
import GreenCover from '../assets/Green/GreenCover.png'
import Green1 from '../assets/Green/Green1.png'
import Green2 from '../assets/Green/Green2.png'
import Green3 from '../assets/Green/Green3.png'
import Green4 from '../assets/Green/Green4.png'
import PastelCover from '../assets/Pastel/PastelCover.jpeg'
import Pastel1 from '../assets/Pastel/Pastel1.jpeg'
import Pastel2 from '../assets/Pastel/Pastel2.jpeg'
import Pastel3 from '../assets/Pastel/Pastel3.jpeg'
import Stack from './Stack';
import withLiquidEtherBackground from './withLiquidEtherBackground';

const dataDescription = [
    {
        id: 1,
        img: VelvetCover,
        price: 4999,
        dressCode: "MIB001",
        description: "The classic wine shade drapes beautifully in a timeless silhouette, enhanced  with bold statement borders that elevate the entire look with effortless grandeur.",
        images: [{ id: 1, img: Velvet1 },
        { id: 2, img: Velvet2 },
        { id: 3, img: Velvet3 },
        { id: 4, img: VelvetCover }]
    },
    {
        id: 2,
        img: OrangeCover,
        price: 3000,
        dressCode: "MIB002",
        description: "A statement piece crafted to captivate. This show-stealing festive ensemble combines vibrant elegance with refined detailing, making it an essential addition to your wardrobe. Designed with both style and comfort in mind, it offers a chic, contemporary silhouette while ensuring effortless ease throughout your celebrations.",
        images: [{ id: 1, img: Orange1 },
        { id: 2, img: Orange2 },
        { id: 3, img: Orange3 },
        { id: 4, img: OrangeCover }]
    },
    {
        id: 3,
        img: BlueCover,
        price: 4500,
        dressCode: "MIB003",
        description: "The exclusive blue kurta and skirt set holds a special place in the hearts of our designers. The rich blue paired with radiant gold detailing creates a striking, show-stopping look that promises undeniable presence. Slip into this ensemble and become the centre of every conversation and every gaze.",
        images: [{ id: 1, img: Blue1 },
        { id: 2, img: Blue2 },
        { id: 3, img: Blue3 },
        { id: 4, img: BlueCover }]
    },
    {
        id: 4,
        img: CreamCover,
        price: 5222,
        dressCode: "MIB004",
        description: "A celebration of timeless elegance. Our classic ivory Anarkali, paired with a delicate pastel multicolour dupatta, embodies refined sophistication and graceful charm. Its versatile appeal makes it perfect for a range of occasions, offering a look that is both effortless and enduring. A true staple for those who embrace understated luxury.",
        images: [{ id: 1, img: Cream1 },
        { id: 2, img: Cream2 },
        { id: 3, img: Cream3 },
        { id: 4, img: CreamCover }]
    },
    {
        id: 5,
        img: PurpleCover,
        price: 3777,
        dressCode: "MIB002",
        description: "Our minimal purple Anarkali is elevated with a festive twist through its exquisite zari style dupatta, creating a beautifully balanced statement of grace and celebration. The contrasting mustard piping adds a refined touch of vibrance, infusing the ensemble with a perfect festive aura.",
        images: [{ id: 1, img: Purple1 }, { id: 2, img: Purple2 }, { id: 3, img: Purple3 }, { id: 4, img: PurpleCover }]
    },
    {
        id: 6,
        img: GreenCover,
        price: 3666,
        dressCode: "MIB003",
        description: "Our green Anarkali, paired with a delicately contrasting pink dupatta, creates a striking symphony of colour a true statement of effortless elegance.",
        images: [{ id: 1, img: Green1 },
        { id: 2, img: Green2 },
        { id: 3, img: Green3 },
        { id: 4, img: Green4 }]
    },
    {
        id: 7,
        img: PastelCover,
        price: 6000,
        dressCode: "MIB004",
        description: "Our light pink Anarkali, crafted in delicate soft hues, embodies an aura of calm and composed elegance. Designed to offer effortless sophistication, it transitions gracefully from refined office wear to intimate, understated occasions.",
        images: [{ id: 1, img: Pastel1 }, { id: 2, img: Pastel2 }, { id: 3, img: Pastel3 }, { id: 4, img: PastelCover }]
    }
];

const DressDescription = () => {
    const { id } = useParams();
    const dress = dataDescription.find(d => d.id === Number(id));

    if (!dress) return <div>Dress not found.</div>;

    return (
        <>
            <div
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "60px",
                    paddingBottom: "60px",
                }}
            >
                <div
                    style={{
                        width: "90%",
                        maxWidth: "700px",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "16px",
                        padding: "30px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                        color: "white",
                        textAlign: "center",
                    }}
                >

                    {/* PRODUCT IMAGES */}
                    <div style={{ marginBottom: "30px" }}>
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 400, height: 400 }} // BIGGER SIZE
                            cardsData={dress?.images}
                        />
                    </div>

                    {/* TITLE + CODE */}
                    <h2 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "700" }}>
                        {dress.dressCode}
                    </h2>

                    {/* PRICE */}
                    <p
                        style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            marginBottom: "20px",
                            color: "#FFD580",
                        }}
                    >
                        ₹ {dress.price}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.6",
                            marginBottom: "30px",
                            color: "#f0e6e6",
                        }}
                    >
                        {dress.description}
                    </p>

                    {/* BUY NOW */}
                    <a
                        href={`https://wa.me/918925888717?text=Hi MIBaaYU, I'm interested in the dress ${dress.dressCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "linear-gradient(135deg, #25D366, #1ebe57)",
                            color: "white",
                            padding: "14px 32px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontSize: "18px",
                            fontWeight: "700",
                            display: "inline-block",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                            transition: "transform 0.2s",
                        }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        Buy Now
                    </a>
                </div>
            </div>
        </>
    );

};

const Description = withLiquidEtherBackground(DressDescription);

export default Description;
