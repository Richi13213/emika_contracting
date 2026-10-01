import AppKit
import Foundation

let width = 1200
let height = 630
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
NSColor(calibratedRed: 0.102, green: 0.102, blue: 0.102, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()
if let photo = NSImage(contentsOfFile: "/tmp/emika-social-photo.png") {
    photo.draw(in: NSRect(x: 600, y: 0, width: 600, height: 630), from: NSRect(x: 100, y: 0, width: 960, height: 900), operation: .sourceOver, fraction: 0.78)
}
NSColor(calibratedRed: 0.071, green: 0.239, blue: 0.651, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: 14, height: 630).fill()
NSRect(x: 65, y: 440, width: 52, height: 4).fill()
let logoPath = "references/EMIKA_Brand_Assets/png/emika-logo-mono-white-2400px.png"
if let logo = NSImage(contentsOfFile: logoPath) {
    logo.draw(in: NSRect(x: 65, y: 500, width: 252, height: 64), from: .zero, operation: .sourceOver, fraction: 1)
}
func draw(_ text: String, rect: NSRect, size: CGFloat, weight: NSFont.Weight, color: NSColor) {
    let style = NSMutableParagraphStyle()
    style.lineSpacing = 4
    let attrs: [NSAttributedString.Key: Any] = [.font: NSFont.systemFont(ofSize: size, weight: weight), .foregroundColor: color, .paragraphStyle: style]
    (text as NSString).draw(in: rect, withAttributes: attrs)
}
draw("Built with precision.\nDesigned to last.", rect: NSRect(x: 65, y: 210, width: 590, height: 190), size: 51, weight: .bold, color: .white)
draw("COMMERCIAL CONSTRUCTION & PROPERTY MAINTENANCE", rect: NSRect(x: 65, y: 130, width: 630, height: 35), size: 18, weight: .semibold, color: NSColor(calibratedRed: 0.76, green: 0.83, blue: 1, alpha: 1))
draw("BARRIE, ONTARIO", rect: NSRect(x: 65, y: 78, width: 450, height: 28), size: 16, weight: .medium, color: .white)
NSGraphicsContext.restoreGraphicsState()
let data = bitmap.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: "public/brand/emika-social-card.png"))
