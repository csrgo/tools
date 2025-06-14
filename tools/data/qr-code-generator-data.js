window.QR_CODE_GENERATOR_DATA = {
    hero: {
        icon: 'qr-code',
        iconBg: 'gradient-bg',
        title: 'QR Code Generator',
        subtitle: 'Create QR codes for URLs, text, contact information, and more with size and error correction options',
        features: [
          { icon: 'shield', color: 'text-green-500', label: 'Secure Generation' },
          { icon: 'zap', color: 'text-purple-500', label: 'Instant Results' },
          { icon: 'globe', color: 'text-blue-500', label: 'Browser-based' }
        ]
      },
      whatIs: {
        title: 'What is QR Code Generator?',
        content: `The QR Code Generator is a free online tool that allows you to create QR codes for various purposes. QR (Quick Response) codes are two-dimensional barcodes that can store different types of information such as URLs, text, contact details, and more.<br><br><strong>Options:</strong> You can adjust the size and error correction level of your QR code. All QR codes are generated with a black foreground and white background for maximum compatibility and scan reliability.`
      },
      whyUse: {
        title: 'Why Use QR Code Generator?',
        items: [
          { icon: 'shield', title: 'Error Correction', desc: 'Choose from multiple error correction levels to ensure your QR code remains scannable even if partially damaged.' },
          { icon: 'ruler', title: 'Custom Size', desc: 'Set the size of your QR code to fit your needs, from 50px to 1000px.' },
          { icon: 'globe', title: 'Universal Compatibility', desc: 'Generated QR codes are compatible with all modern QR code scanners and mobile devices.' },
          { icon: 'zap', title: 'Instant Generation', desc: 'Create and download QR codes instantly without any software installation required.' }
        ]
      },
      howToUse: {
        title: 'How to Use QR Code Generator',
        steps: [
          { icon: 'edit', title: 'Enter Content', desc: 'Type or paste the text, URL, or other content you want to encode in the QR code.' },
          { icon: 'settings', title: 'Set Size & Error Correction', desc: 'Adjust the size and error correction level to match your needs.' },
          { icon: 'wand-2', title: 'Generate QR Code', desc: 'Click the "Generate QR Code" button to create your QR code.' },
          { icon: 'download', title: 'Download', desc: 'Download your QR code as a PNG image for use in your projects.' }
        ]
      },
      features: [
        'Generate QR codes for URLs, text, contact information, and more',
        'Customize QR code size from 50px to 1000px',
        'Choose from multiple error correction levels (L, M, Q, H)',
        'All QR codes are black on white for maximum compatibility',
        'Instant preview of generated QR code',
        'Download QR code as PNG image',
        'All processing done in your browser for privacy and security',
        'No software installation required'
      ],
      faq: [
        {
          q: 'What is error correction in QR codes?',
          a: 'Error correction allows QR codes to remain scannable even if they are partially damaged or obscured. Higher error correction levels (H) provide better recovery but require more space, while lower levels (L) use less space but are more vulnerable to damage.'
        },
        {
          q: 'What types of content can I encode in a QR code?',
          a: 'You can encode various types of content including URLs, plain text, contact information (vCard), email addresses, phone numbers, SMS messages, and more.'
        },
        {
          q: 'Can I customize the colors of my QR code?',
          a: 'No, this tool generates QR codes with a black foreground and white background only. This ensures the highest level of compatibility and scan reliability.'
        },
        {
          q: 'What size should I make my QR code?',
          a: 'The size depends on your use case. For digital use, 200-300px is usually sufficient. For printing, you may want to use a larger size (500px+) to ensure good quality.'
        },
        {
          q: 'Are my QR codes secure?',
          a: 'Yes, all QR code generation is done locally in your browser. Your data is never sent to our servers, ensuring complete privacy and security.'
        }
      ]
};
