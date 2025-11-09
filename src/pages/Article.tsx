import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const blogPosts = [
  {
    id: 1,
    title: 'Творческий подход к современному дизайну',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/b6a9b903-3d32-4e10-a8e2-2d0c10bf9b45.jpg',
    date: '5 ноября 2025',
    readTime: '5 мин',
    content: `
      <h2>Введение в креативный дизайн</h2>
      <p>Современный дизайн — это не просто красивые картинки. Это целая философия, которая объединяет эстетику, функциональность и инновационный подход к решению проблем.</p>
      
      <h2>Принципы творческого мышления</h2>
      <p>Креативность начинается с отказа от стереотипов. Когда мы перестаем следовать шаблонам, рождаются по-настоящему уникальные решения. Великие дизайнеры понимают, что каждый проект — это возможность создать что-то новое.</p>
      
      <p>Важно помнить о балансе между экспериментом и практичностью. Самый красивый дизайн бесполезен, если он не решает задачи пользователя.</p>
      
      <h2>Цвет как инструмент эмоций</h2>
      <p>Цветовая палитра — это язык, на котором дизайнер говорит с аудиторией. Яркие, насыщенные цвета привлекают внимание и создают энергию, в то время как пастельные оттенки успокаивают и вызывают доверие.</p>
      
      <h2>Заключение</h2>
      <p>Творческий подход к дизайну — это постоянное обучение, эксперименты и готовность выходить за рамки привычного. Только так рождаются проекты, которые меняют индустрию.</p>
    `
  },
  {
    id: 2,
    title: 'Магия рабочего пространства',
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/ee576f57-2a7c-44a4-a136-da6230a06c16.jpg',
    date: '3 ноября 2025',
    readTime: '7 мин',
    content: `
      <h2>Почему пространство имеет значение</h2>
      <p>Ваше рабочее место — это не просто стол и компьютер. Это среда, которая либо вдохновляет, либо подавляет вашу продуктивность и креативность.</p>
      
      <h2>Организация идеального пространства</h2>
      <p>Начните с минимализма. Уберите все лишнее, что отвлекает внимание. Оставьте только то, что действительно нужно для работы и что приносит радость.</p>
      
      <p>Освещение играет критическую роль. Естественный свет — лучший друг продуктивности. Если его недостаточно, инвестируйте в качественные лампы с регулируемой яркостью.</p>
      
      <h2>Личные акценты</h2>
      <p>Добавьте элементы, которые отражают вашу личность — растения, артворки, памятные предметы. Они создают эмоциональную связь с пространством.</p>
    `
  },
  {
    id: 3,
    title: 'Будущее цифровых технологий',
    category: 'Технологии',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/2b9c5e7c-ce7b-477f-b765-13d540196295.jpg',
    date: '1 ноября 2025',
    readTime: '6 мин',
    content: `
      <h2>Технологическая революция</h2>
      <p>Мы живем в эпоху беспрецедентных изменений. Искусственный интеллект, виртуальная реальность и квантовые компьютеры перестают быть научной фантастикой.</p>
      
      <h2>ИИ и творчество</h2>
      <p>Искусственный интеллект уже не просто помощник — он становится соавтором. От генерации изображений до написания кода, ИИ расширяет границы возможного.</p>
      
      <h2>Этика инноваций</h2>
      <p>С великой силой приходит великая ответственность. Важно развивать технологии так, чтобы они служили человечеству, а не создавали новые проблемы.</p>
    `
  }
];

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <Icon name="FileQuestion" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-montserrat font-semibold mb-4">Статья не найдена</h2>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <article className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:text-primary"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к статьям
        </Button>

        <div className="mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-none">
            {post.category}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl mb-12 aspect-video shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <Separator className="mb-12" />

        <div 
          className="prose prose-lg max-w-none font-merriweather"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.8'
          }}
        />

        <Separator className="my-12" />

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="hover:border-primary"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Все статьи
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="hover:text-primary">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:text-primary">
              <Icon name="Share2" size={20} />
            </Button>
          </div>
        </div>
      </article>

      <style>{`
        .prose h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
        }
        
        .prose p {
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
          opacity: 0.9;
        }
        
        .prose h2:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
};

export default Article;
