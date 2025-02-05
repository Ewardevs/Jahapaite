import React from 'react'

export default function WhatsappIcon() {
    return (
        <>
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.049 5.591 2.787 7.682L1.3 23.7l4.118-1.487C7.556 23.346 9.71 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM8.064 9.617c.308-.047.578.207.578.529 0 .322-.271.576-.578.529-.308-.047-.578-.207-.578-.529 0-.322.271-.576.578-.529zm7.872 0c.308-.047.578.207.578.529 0 .322-.271.576-.578.529-.308-.047-.578-.207-.578-.529 0-.322.271-.576.578-.529zm-3.936 7.872c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                </svg>
            </a>
        </ >

    )
}
