import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            PRINTLAB
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Дизайны
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Как это работает
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Заказать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ТВОЙ
              <br />
              ПРИНТ
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Собери свой принт из готовых элементов, добавь надпись или загрузи собственный рисунок — и мы напечатаем его на футболке. Просто. Точно. По-твоему.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors"
            >
              Создать дизайн
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <Icon name="Shirt" size={160} className="text-white" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ДИЗАЙНЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon name="Type" size={72} className="text-black group-hover:text-white transition-colors" />
                  <span className="mt-4 text-black group-hover:text-white text-2xl font-bold transition-colors">ТИПОГРАФИКА</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Свои надписи</h3>
              <p className="text-neutral-400">Любой текст, шрифт и цвет — собери цитату, имя или слоган</p>
            </div>

            {/* Design 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon name="Shapes" size={72} className="text-black group-hover:text-white transition-colors" />
                  <span className="mt-4 text-black group-hover:text-white text-2xl font-bold transition-colors">ЭЛЕМЕНТЫ</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Готовые компоненты</h3>
              <p className="text-neutral-400">Сотни форм, иконок и графики для быстрой сборки принта</p>
            </div>

            {/* Design 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon name="Upload" size={72} className="text-black group-hover:text-white transition-colors" />
                  <span className="mt-4 text-black group-hover:text-white text-2xl font-bold transition-colors">СВОЙ ФАЙЛ</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Личный рисунок</h3>
              <p className="text-neutral-400">Загрузи своё изображение и размести его на футболке</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КАК ЭТО РАБОТАЕТ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <Icon name="MousePointerClick" size={120} className="text-black" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                PRINTLAB — онлайн-конструктор индивидуальных принтов. Создай уникальный дизайн прямо в браузере и закажи печать на качественной футболке.
              </p>
              <p className="mb-6">
                Комбинируй готовые элементы, добавляй текст любым шрифтом или загружай собственные изображения. Перемещай, масштабируй и располагай объекты так, как тебе нравится — никаких навыков дизайна не нужно.
              </p>
              <p className="mb-6">
                Когда макет готов — оформляй заказ. Мы печатаем стойкими красками, упаковываем и доставляем готовую футболку прямо к тебе.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Шаги</h3>
                  <ul className="space-y-2">
                    <li>1. Выбери основу</li>
                    <li>2. Собери дизайн</li>
                    <li>3. Загрузи свой рисунок</li>
                    <li>4. Оформи заказ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Возможности</h3>
                  <ul className="space-y-2">
                    <li>Готовые компоненты</li>
                    <li>Свои изображения</li>
                    <li>Надписи и шрифты</li>
                    <li>Печать и доставка</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАКАЗАТЬ</h2>
              <p className="text-xl mb-8">Готов воплотить свою идею? Оставь заявку — мы рассчитаем стоимость и сделаем твою футболку.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@printlab.ru" className="hover:underline">
                    hello@printlab.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Доставка</span>
                  <span>По всей России</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Детали заказа
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Размер, количество, пожелания к дизайну"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Оформить заказ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 PRINTLAB. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
