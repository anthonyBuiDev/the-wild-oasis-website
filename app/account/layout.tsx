import SideNavigation from "@/components/SideNavigation";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
    <SideNavigation />
    <div className="py-1">{children}</div>
  </div>
  )
}
