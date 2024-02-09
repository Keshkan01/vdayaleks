import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <p id="yay">💖 I love you :) 💖</p>
                </section>
            </div>
        </div>
    )
}