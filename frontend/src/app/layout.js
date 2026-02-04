import './globals.css'

export const metadata = {
  title: '방화벽 로그 모니터링 시스템',
  description: '실시간 방화벽 로그 모니터링 및 분석 시스템',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen bg-gray-50">
          {/* 헤더 */}
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h1 className="text-2xl font-bold text-gray-900">
                방화벽 로그 모니터링 시스템
              </h1>
            </div>
          </header>

          {/* 메인 컨텐츠 */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <p className="text-center text-gray-500 text-sm">
                © 2026 방화벽 로그 모니터링 시스템. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
