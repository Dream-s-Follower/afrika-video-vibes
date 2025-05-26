
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 py-12" id="contact">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-8">Contact</h1>
        <p className="mb-6 text-lg">Envie de collaborer, besoin d’un devis ou d’un renseignement ?<br />Écrivez-moi !</p>
        <form className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto grid gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="nom">Nom</label>
            <input type="text" required id="nom" name="nom" className="w-full rounded border border-accent px-4 py-2" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input type="email" required id="email" name="email" className="w-full rounded border border-accent px-4 py-2" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
            <textarea required id="message" name="message" className="w-full rounded border border-accent px-4 py-2" rows={5} placeholder="Décrivez votre besoin..."></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-7 rounded-lg shadow-lg transition-colors"
            disabled={status === "sent"}
          >
            {status === "sent" ? "Message envoyé !" : "Envoyer"}
          </button>
          <div className="flex gap-4 justify-center mt-2">
            <a href="https://www.linkedin.com/" className="hover:underline text-accent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/" className="hover:underline text-accent" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
