import Link from 'next/link'

const Home = () => {
  const posts = [
    {
      title: '제어 컴포넌트와 비제어 컴포넌트',
      description:
        '제어 컴포넌트와 비제어 컴포넌트의 차이점을 이해하고, 실제 잘못된 사용 사례를 통해 올바른 활용법을 알아봅니다.',
      tags: ['React'],
      date: '2025.12.15',
      readingTime: '2분',
      path: 'blog/controlled-uncontrolled-components'
    },
    {
      title: 'React CSR 초기 로딩부터 라우팅까지',
      description:
        'CSR 환경, 초기 로딩부터 라우팅까지의 브라우저 내부 동작 흐름을 정리합니다.',
      tags: ['React', 'CSR', 'React Router'],
      date: '2024.12.09',
      readingTime: '3분',
      path: 'blog/route'
    },
    {
      title: '[코어 자바스크립트] 클로저',
      description: '클로저 현상이 발생하는 원리를 이해합니다.',
      tags: ['Javascript'],
      date: '2024.12.07',
      readingTime: '2분',
      path: 'blog/closure'
    },

    {
      title: '[코어 자바스크립트] 데이터 타입',
      description:
        '데이터 타입과 특징을 이해하고 자바스크립트 라이브러리에서 어떻게 활용하는지 살펴봅니다.',
      tags: ['Javascript', 'React'],
      date: '2025.12.05',
      readingTime: '3분',
      path: 'blog/data-type'
    }
  ]

  const studyNotes = [
    '브라우저가 라우트 매칭 직전에 lazy 청크와 데이터를 병렬로 가져오는 흐름 정리',
    'Error Boundary 단위에서 네비게이션 실패를 관리하는 패턴',
    'Suspense를 활용한 스켈레톤/이전 화면 유지 전략 메모'
  ]

  return (
    // TODO: 컴포넌트 단위 분리필요
    <div className='min-h-screen bg-gradient-to-b from-zinc-50 via-white to-slate-100 text-zinc-900'>
      <main className='mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12'>
        <header className='relative overflow-hidden rounded-3xl border border-zinc-200 bg-white px-8 py-10 shadow-sm'>
          <div className='absolute inset-y-0 right-0 -z-1 w-1/5 bg-gradient-to-l from-indigo-100/70 via-white to-transparent blur-3xl' />
          <p className='inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600'>
            ✦ 기록 블로그
          </p>
          <div className='mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl space-y-4'>
              <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
                오늘은 어떤 것을 경험하셨나요?
                <br className='hidden sm:block' />
                경험으로 만드는 나만의 기술 블로그
              </h1>
              <p className='text-lg leading-7 text-zinc-600 max-w-lg'>
                실험과 학습 일지를 남기는 공간입니다. 새로운 기능을 테스트하며
                얻은 인사이트를 짧은 글로 정리합니다.
              </p>
              <div className='flex flex-wrap gap-3 text-sm text-zinc-700'>
                <span className='rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700'>
                  #Next.js
                </span>
                <span className='rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700'>
                  #React
                </span>
                <span className='rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700'>
                  #웹아키텍처
                </span>
                <span className='rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700'>
                  #DX
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Link
                href='#posts'
                className='rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700'
              >
                최신 글 보기
              </Link>
              <Link
                href='https://nextjs.org/docs'
                className='rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50'
              >
                Next.js 문서
              </Link>
            </div>
          </div>
        </header>

        <section
          id='posts'
          className='rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm'
        >
          <div className='flex items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.08em] text-indigo-600'>
                Latest posts
              </p>
              <h2 className='mt-2 text-2xl font-semibold tracking-tight'>
                보고 읽고 듣고 경험한 모든 것
              </h2>
              <p className='text-sm text-zinc-600'>
                기능 실험기, 학습 노트, 배포 경험을 간결하게 남깁니다.
              </p>
            </div>
            <Link
              href='#'
              className='hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50 md:inline-flex'
            >
              모든 글 보기
            </Link>
          </div>
          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            {posts.map((post) => (
              <article
                key={post.title}
                className='group relative flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-white via-white to-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md'
              >
                <div className='flex items-center justify-between text-xs font-semibold text-zinc-500'>
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold leading-7 tracking-tight text-zinc-900'>
                    {post.title}
                  </h3>
                  <p className='text-sm leading-6 h-12 text-zinc-600'>
                    {post.description}
                  </p>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.path}
                  className='mt-2 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition group-hover:translate-x-1'
                >
                  글 읽으러 가기 →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className='grid gap-6 lg:grid-cols-5'>
          <div className='lg:col-span-3'>
            <div className='rounded-3xl border border-indigo-100 bg-indigo-50/70 p-8 shadow-sm'>
              <p className='text-sm font-semibold uppercase tracking-[0.08em] text-indigo-700'>
                Study route
              </p>
              <h3 className='mt-2 text-xl font-semibold tracking-tight text-indigo-900'>
                CSR부터 서버 사이드 렌더링까지 흐름 정리
              </h3>
              <p className='mt-2 text-sm leading-6 text-indigo-800/80'>
                data/Route.md에 정리한 브라우저 내부 동작 메모를 토대로 블로그
                글을 확장해 보세요. lazy 로딩, loader 병렬화, Suspense 전략을
                기준으로 글의 뼈대를 만들 수 있습니다.
              </p>
              <div className='mt-4 flex flex-wrap gap-3 text-sm font-semibold text-indigo-800'>
                <span className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2'>
                  data/Route.md 메모
                </span>
                <Link
                  href='https://react.dev/reference/react/Suspense'
                  className='inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 transition hover:border-indigo-300'
                >
                  Suspense 복습
                </Link>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2'>
            <div className='h-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm'>
              <p className='text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600'>
                Quick notes
              </p>
              <h3 className='mt-2 text-xl font-semibold tracking-tight text-zinc-900'>
                글 쓰기 전에 살펴볼 체크리스트
              </h3>
              <ul className='mt-4 space-y-3 text-sm text-zinc-700'>
                {studyNotes.map((note) => (
                  <li
                    key={note}
                    className='flex items-start gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3'
                  >
                    <span className='mt-1 h-2 w-2 rounded-full bg-emerald-500' />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className='rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.08em] text-zinc-600'>
                Getting started
              </p>
              <h3 className='text-xl font-semibold tracking-tight text-zinc-900'>
                첫 글을 올리고 배포해 보세요
              </h3>
              <p className='text-sm text-zinc-600'>
                새 글을 추가하려면 markdown을 작성하고, 라우트를 연결한 뒤 `pnpm
                build`로 확인하세요.
              </p>
            </div>
            <div className='flex gap-3 text-sm font-semibold'>
              <Link
                href='https://nextjs.org/learn'
                className='rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700'
              >
                튜토리얼
              </Link>
              <Link
                href='https://nextjs.org/docs/app/building-your-application/routing'
                className='rounded-full border border-zinc-200 px-4 py-2 transition hover:border-zinc-300 hover:bg-zinc-50'
              >
                라우팅 가이드
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
