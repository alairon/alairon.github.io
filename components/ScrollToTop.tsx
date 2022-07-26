/* A more protected ScrollToTop in case window isn't available */
export default function ScrollToTop(): void {
  if (window) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
}
