import React from 'react'
import PlanSelector from '../components/PlanSelector'
import DownloadZipButton from '../components/DownloadZipButton'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">EdgExpert AI Voice System</h1>
        <p className="text-lg text-gray-600">Your AI-powered voice assistant</p>
      </header>
      
      <main>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <PlanSelector />
        </div>
      </main>
      
      <footer className="mt-12 text-center">
        <div className="flex justify-center gap-4">
          <DownloadZipButton />
        </div>
      </footer>
    </div>
  )
}