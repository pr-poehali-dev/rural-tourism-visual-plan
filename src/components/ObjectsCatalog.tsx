import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Location {
  name: string;
  excursions: string[];
  cafe: {
    seats: number;
    avgCheck: number;
  };
  guesthouse: {
    rooms: number;
    priceFrom: number;
  };
}

const locations: Location[] = [
  {
    name: 'Село Березовка',
    excursions: ['Музей крестьянского быта', 'Мастер-класс по гончарному делу', 'Прогулка на лошадях'],
    cafe: { seats: 60, avgCheck: 800 },
    guesthouse: { rooms: 30, priceFrom: 2500 },
  },
  {
    name: 'Село Дубровка',
    excursions: ['Дубовая роща XVIII века', 'Винокурня и дегустация', 'Рыбалка на пруду'],
    cafe: { seats: 60, avgCheck: 850 },
    guesthouse: { rooms: 30, priceFrom: 2800 },
  },
  {
    name: 'Посёлок Сосновый',
    excursions: ['Экотропа по сосновому бору', 'Пасека и медовая ярмарка', 'Банный комплекс'],
    cafe: { seats: 60, avgCheck: 900 },
    guesthouse: { rooms: 30, priceFrom: 3000 },
  },
  {
    name: 'Село Липовка',
    excursions: ['Липовый сад и чайная церемония', 'Фермерское хозяйство', 'Производство сыра'],
    cafe: { seats: 60, avgCheck: 820 },
    guesthouse: { rooms: 30, priceFrom: 2600 },
  },
  {
    name: 'Село Кленовое',
    excursions: ['Кленовая аллея и фотозона', 'Школа народных ремёсел', 'Концерт фольклорного ансамбля'],
    cafe: { seats: 60, avgCheck: 780 },
    guesthouse: { rooms: 30, priceFrom: 2400 },
  },
  {
    name: 'Село Ивановка',
    excursions: ['Храм Покрова Богородицы', 'Ивановские родники', 'Мельница и хлебопечение'],
    cafe: { seats: 60, avgCheck: 800 },
    guesthouse: { rooms: 30, priceFrom: 2500 },
  },
];

const ObjectsCatalog = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Building2" className="h-5 w-5 text-primary" />
            Каталог объектов маршрута
          </CardTitle>
          <CardDescription>
            Полная информация о 6 населённых пунктах с инфраструктурой
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {locations.map((location, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {location.excursions.length} экскурсии • Кафе • Гостевой дом
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Camera" className="h-4 w-4 text-secondary" />
                        <h4 className="font-semibold">Экскурсионные программы</h4>
                      </div>
                      <div className="grid gap-2">
                        {location.excursions.map((excursion, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-3 bg-muted rounded-lg"
                          >
                            <Badge variant="secondary" className="mt-0.5">
                              {i + 1}
                            </Badge>
                            <div className="flex-1">
                              <p className="font-medium">{excursion}</p>
                              <p className="text-sm text-muted-foreground">
                                Длительность: ~2 часа • Стоимость: от 500 ₽
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon name="Coffee" className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Кафе</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Посадочных мест:</span>
                            <span className="font-semibold">{location.cafe.seats}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Средний чек:</span>
                            <span className="font-semibold">{location.cafe.avgCheck} ₽</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Кухня:</span>
                            <span className="font-semibold">Домашняя</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon name="Hotel" className="h-5 w-5 text-secondary" />
                          <h4 className="font-semibold">Гостевой дом</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Номеров:</span>
                            <span className="font-semibold">{location.guesthouse.rooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Цена от:</span>
                            <span className="font-semibold">
                              {location.guesthouse.priceFrom} ₽/сутки
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Удобства:</span>
                            <span className="font-semibold">В номере</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Info" className="h-5 w-5 text-primary" />
            Сводная информация
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <Icon name="MapPin" className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{locations.length}</p>
              <p className="text-sm text-muted-foreground">Населённых пунктов</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Icon name="Camera" className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold">18</p>
              <p className="text-sm text-muted-foreground">Экскурсий</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Icon name="Coffee" className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">360</p>
              <p className="text-sm text-muted-foreground">Мест в кафе</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Icon name="Hotel" className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">180</p>
              <p className="text-sm text-muted-foreground">Номеров</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ObjectsCatalog;
