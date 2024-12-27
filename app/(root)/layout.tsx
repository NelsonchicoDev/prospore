import Footer from "@/components/footer"
import Header from "@/components/shared/header/header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex-1 wrapper">
                {children}

            </main>
            <Footer />
        </div>

        
   
    )
  }