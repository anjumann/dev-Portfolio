"use client"
import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFPreviewer = (
    {
        src
    }: {
        src: string
    }
) => {
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="w-[90vw] md:w-[60vw] h-fit overflow-auto">
                    <Viewer fileUrl={src} />
                </div>
            </Worker>
        </>
    )
}

export default PDFPreviewer