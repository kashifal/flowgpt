import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const memoryOptions = [
  { name: 'GPT-2', inStock: true },
  { name: 'GPT-3', inStock: true },
  { name: 'GPT-4', inStock: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioModels() {
  const [mem, setMem] = useState(memoryOptions[0])

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium leading-6 text-white/80">models</h2>
         
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed ',
                  active ? '' : '',
                  checked
                    ? 'linear-bg focus:outline-none hover-linear-bg text-white '
                    : 'bg-transparent focus:outline-none text-white hover-linear-bg',
                  'flex items-center gap-2 focus:outline-none flex-wrap justify-start rounded-md py-2 px-3 text-sm font-semibold uppercase sm:flex-1'
                )
              }
              disabled={!option.inStock}
            >
                <img src="/images/gptbw.png" />
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
