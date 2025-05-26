
export default function Footer() {
  return (
    <footer className="bg-anthracite text-beige py-8 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold font-playfair">CM Vidéo Afrique</div>
        <div className="text-sm">
          © {new Date().getFullYear()} — Community manager vidéo, Afrique. Portfolio par Lovable.
        </div>
      </div>
    </footer>
  )
}
