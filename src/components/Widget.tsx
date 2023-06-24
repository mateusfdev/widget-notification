import { Rocket, User, X, Check } from 'lucide-react'



export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">

      {/*header */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-zinc-800 dark:text-zinc-200">
          Notificações</span>
        <button className="text-violet-600 font-bold text-xs hover:text-violet-500">
          MARCAR TODAS COMO VISTAS</button>
      </div>

      {/*recent section */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-800 dark:text-zinc-400">
          Recentes</div>


        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
        {/*notify one */}
        <div className="bg-zinc-100 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-600 mt-3" />
          <div className=" flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat!</p>
          </div>
          <div className="text-xxs text-zinc-800 dark:text-zinc-400 flex items-center gap-1">
            <span>Convite</span>
            <span> Há 3min.</span>
          </div>
        </div>
        {/*notify two */}
        <div className="bg-zinc-100 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-600 mt-3" />
          <div className=" flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat!</p>
          </div>
          <div className="text-xxs text-zinc-800 dark:text-zinc-400 flex items-center gap-1">
            <span>Convite</span>
            <span> Há 3min.</span>
          </div>
        </div>

            {/*old section */}
            <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-800 dark:text-zinc-400">
          Anteriores</div>


        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
        {/*notify one button */}
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <User className="w-6 h-6 text-violet-600 mt-6" />
          <div className=" flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat!</p>
          </div>
          <div className="text-xxs text-zinc-800 dark:text-zinc-400 flex items-center gap-1">
            <span>Convite</span>
            <span> Há 3min.</span>
          </div>
        

          <div className='flex gap-2 self-center'>     
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-500">
                <X className="w-3 h-3 text-zinc-50" />
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-700 hover:bg-violet-600">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
          </div>
        </div>



        {/*notify two */}
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-600 mt-3" />
          <div className=" flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat!</p>
          </div>
          <div className="text-xxs text-zinc-800 dark:text-zinc-400 flex items-center gap-1">
            <span>Convite</span>
            <span> Há 3min.</span>
          </div>
        </div>



        {/*notify tree */}
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-600 mt-3" />
          <div className=" flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat!</p>
          </div>
          <div className="text-xxs text-zinc-800 dark:text-zinc-400 flex items-center gap-1">
            <span>Convite</span>
            <span> Há 3min.</span>
          </div>
          <div className='flex gap-2 self-center'>     
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-500">
                <X className="w-3 h-3 text-zinc-50" />
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-700 hover:bg-violet-600">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
          </div>
        </div>

        </div>

      </div>
      






      </div>
      </div>

    </div>
  )
}