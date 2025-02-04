
import StyledComponentsRegistry from '@/app/registry'
 
export default function RootLayout({
  children,
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}