import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const categories = ['Все', 'Дизайн', 'Технологии', 'Творчество', 'Искусство'];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Творческий подход к современному дизайну',
    excerpt: 'Исследуем, как креативность меняет правила игры в мире цифрового дизайна и создает новые стандарты...',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/b6a9b903-3d32-4e10-a8e2-2d0c10bf9b45.jpg',
    date: '5 ноября 2025',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Магия рабочего пространства',
    excerpt: 'Как правильно организованная среда влияет на продуктивность и вдохновение творческих людей...',
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/ee576f57-2a7c-44a4-a136-da6230a06c16.jpg',
    date: '3 ноября 2025',
    readTime: '7 мин'
  },
  {
    id: 3,
    title: 'Будущее цифровых технологий',
    excerpt: 'Погружаемся в мир инноваций и узнаем, какие технологии изменят нашу жизнь в ближайшие годы...',
    category: 'Технологии',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/2b9c5e7c-ce7b-477f-b765-13d540196295.jpg',
    date: '1 ноября 2025',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: 'Цвет и эмоции в искусстве',
    excerpt: 'Как художники используют цветовые палитры для передачи настроения и создания уникальных впечатлений...',
    category: 'Искусство',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/b6a9b903-3d32-4e10-a8e2-2d0c10bf9b45.jpg',
    date: '28 октября 2025',
    readTime: '4 мин'
  },
  {
    id: 5,
    title: 'Минимализм в дизайне интерфейсов',
    excerpt: 'Разбираем принципы минималистичного подхода и его влияние на пользовательский опыт...',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/2b9c5e7c-ce7b-477f-b765-13d540196295.jpg',
    date: '25 октября 2025',
    readTime: '8 мин'
  },
  {
    id: 6,
    title: 'Искусство рассказывать истории',
    excerpt: 'Мастерство сторителлинга в контент-маркетинге и визуальных коммуникациях современного мира...',
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/13af8b52-8b47-47e7-97fd-7f9079cb9204/files/ee576f57-2a7c-44a4-a136-da6230a06c16.jpg',
    date: '22 октября 2025',
    readTime: '6 мин'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const navigate = useNavigate();

  const filteredPosts = selectedCategory === 'Все'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Креативный блог
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-merriweather">
            Исследуем мир дизайна, технологий и творчества через призму необычных идей
          </p>
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent shadow-lg scale-105'
                  : 'hover:scale-105 hover:border-primary'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in border-2 hover:border-primary cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/article/${post.id}`)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white border-none shadow-lg">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 pb-4">
                <h2 className="text-2xl font-montserrat font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2 font-merriweather">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-montserrat font-semibold mb-2">Статьи не найдены</h3>
            <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
          </div>
        )}

        <footer className="mt-20 text-center border-t pt-8 animate-fade-in">
          <p className="text-muted-foreground font-merriweather">
            © 2025 Креативный блог. Вдохновляем каждый день
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
