/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eMJDmvY7fFe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <TruckIcon className="h-6 w-6" />
            <span className="text-lg font-bold">ExportHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Layanan
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Pelacakan
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Biaya
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Kontak
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white p-4 md:hidden">
              <div className="flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <TruckIcon className="h-6 w-6" />
                  <span className="text-lg font-bold">ExportHub</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="mt-4 grid gap-2">
                <Link href="#" className="hover:bg-gray-800 rounded-md px-3 py-2" prefetch={false}>
                  Layanan
                </Link>
                <Link href="#" className="hover:bg-gray-800 rounded-md px-3 py-2" prefetch={false}>
                  Pelacakan
                </Link>
                <Link href="#" className="hover:bg-gray-800 rounded-md px-3 py-2" prefetch={false}>
                  Biaya
                </Link>
                <Link href="#" className="hover:bg-gray-800 rounded-md px-3 py-2" prefetch={false}>
                  Kontak
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">Layanan Ekspor-Impor Terpercaya</h1>
                <p className="text-gray-600 mb-6">
                  ExportHub menyediakan layanan ekspor-impor yang handal dan efisien. Kami membantu Anda dalam setiap
                  tahap proses pengiriman, mulai dari dokumentasi hingga pengiriman barang.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <PackageIcon className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="text-lg font-bold mb-2">Pelacakan Pengiriman</h3>
                    <p className="text-gray-600">Pantau status pengiriman Anda secara real-time.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <CalculatorIcon className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="text-lg font-bold mb-2">Perhitungan Biaya</h3>
                    <p className="text-gray-600">Dapatkan estimasi biaya pengiriman dengan mudah.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <MailIcon className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="text-lg font-bold mb-2">Formulir Kontak</h3>
                    <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <ShieldIcon className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="text-lg font-bold mb-2">Keamanan Terjamin</h3>
                    <p className="text-gray-600">Kami menjamin keamanan barang Anda.</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Ekspor-Impor"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Pelacakan Pengiriman"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Pelacakan Pengiriman Mudah</h2>
                <p className="text-gray-300 mb-6">
                  Dengan ExportHub, Anda dapat melacak status pengiriman barang Anda secara real-time. Dapatkan
                  informasi terkini tentang lokasi, estimasi waktu kedatangan, dan status pengiriman.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                  prefetch={false}
                >
                  Mulai Pelacakan
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Perhitungan Biaya Pengiriman</h2>
                <p className="text-gray-600 mb-6">
                  Dapatkan estimasi biaya pengiriman Anda dengan mudah menggunakan kalkulator kami. Masukkan detail
                  pengiriman Anda, dan kami akan memberikan perkiraan biaya yang akurat.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                  prefetch={false}
                >
                  Hitung Biaya
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Perhitungan Biaya"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Hubungi Kami</h2>
            <p className="text-gray-300 mb-8 text-center">
              Jika Anda memiliki pertanyaan atau ingin mendapatkan informasi lebih lanjut, jangan ragu untuk menghubungi
              kami.
            </p>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Label htmlFor="name" className="text-gray-300">
                  Nama
                </Label>
                <Input id="name" type="text" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="Masukkan email Anda" />
              </div>
              <div className="mb-4">
                <Label htmlFor="message" className="text-gray-300">
                  Pesan
                </Label>
                <Textarea id="message" rows={4} placeholder="Tulis pesan Anda" />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 ExportHub. Hak cipta dilindungi.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Syarat dan Ketentuan
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CalculatorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}