'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [systemStatus, setSystemStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 백엔드 헬스 체크
    const checkBackendHealth = async () => {
      try {
        const response = await fetch('http://localhost:8000/health')
        const data = await response.json()
        setSystemStatus(data)
        setError(null)
      } catch (err) {
        setError('백엔드 서버에 연결할 수 없습니다.')
        setSystemStatus(null)
      } finally {
        setLoading(false)
      }
    }

    checkBackendHealth()
  }, [])

  return (
    <div className="space-y-6">
      {/* 환영 메시지 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          대시보드
        </h2>
        <p className="text-gray-600">
          방화벽 로그 모니터링 시스템에 오신 것을 환영합니다.
        </p>
      </div>

      {/* 시스템 상태 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          시스템 상태
        </h3>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {systemStatus && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">상태:</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                정상
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">서비스:</span>
              <span className="text-gray-900">{systemStatus.service}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">버전:</span>
              <span className="text-gray-900">{systemStatus.version}</span>
            </div>
          </div>
        )}
      </div>

      {/* 빠른 링크 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            로그 조회
          </h3>
          <p className="text-gray-600 text-sm">
            실시간 방화벽 로그를 조회하고 필터링합니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            통계 분석
          </h3>
          <p className="text-gray-600 text-sm">
            로그 데이터를 분석하고 시각화합니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            설정
          </h3>
          <p className="text-gray-600 text-sm">
            알림 및 시스템 설정을 관리합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
