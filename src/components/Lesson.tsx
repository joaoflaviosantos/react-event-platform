import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link } from 'react-router-dom';
/* import ptBR from 'date-fns/locale/pt-BR' */

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {

  const isLessonAvailable = isPast(props.availableAt)
  /* const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'MMMM' 'd' • 'k'h'mm", {locale: ptBR}) */
  const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'MMMM' 'd' • 'k'h'mm")

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        { availableAtDateFormatted }
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Released Content
          </span>
          ) : (
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Coming soon
          </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          { props.title }
        </strong>
      </div>
    </Link>
  )
}
