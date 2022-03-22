import cn from 'clsx'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'border-accent-7 bg-accent-7 text-white': preview,
        'border-accent-2 bg-accent-1': !preview,
      })}
    >
      <div>
        <div className="py-2 text-sm text-center">
          {preview ? (
            <>
              This page is a preview.{' '}
              <Link href="/api/exit-preview">
                <a className="underline transition-colors duration-200 hover:text-cyan">
                  Click here
                </a>
              </Link>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href="#"
                className="underline transition-colors duration-200 hover:text-success"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </div>
    </div>
  )
}
