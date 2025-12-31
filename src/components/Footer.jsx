import React from 'react'

const Footer = () => {
  return (
    <footer class="w-full bg-gradient-to-b from-[#1e1e1e] to-[#18203a] text-white">
    <div class="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div class="flex items-center space-x-3 mb-6">
            <img alt="" class="h-11"
                src="/job-employment.svg" />
        </div>
        <p class="text-center max-w-xl text-sm font-normal leading-relaxed">
            Connecting employers with trusted blue-collar professionals.
        </p>
    </div>
    <div class="border-t border-[#3B1A7A]">
        <div class="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            <a href="https://prebuiltui.com">Hirely!</a> ©2025. All rights reserved.
        </div>
    </div>
</footer>
  )
}

export default Footer
