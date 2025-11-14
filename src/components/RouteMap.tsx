import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Village {
  id: number;
  name: string;
  x: number;
  y: number;
  excursions: number;
  cafe: boolean;
  guesthouse: boolean;
}

const villages: Village[] = [
  { id: 1, name: 'Село Березовка', x: 15, y: 30, excursions: 3, cafe: true, guesthouse: true },
  { id: 2, name: 'Село Дубровка', x: 35, y: 20, excursions: 3, cafe: true, guesthouse: true },
  { id: 3, name: 'Посёлок Сосновый', x: 55, y: 35, excursions: 3, cafe: true, guesthouse: true },
  { id: 4, name: 'Село Липовка', x: 70, y: 25, excursions: 3, cafe: true, guesthouse: true },
  { id: 5, name: 'Село Кленовое', x: 85, y: 45, excursions: 3, cafe: true, guesthouse: true },
  { id: 6, name: 'Село Ивановка', x: 90, y: 70, excursions: 3, cafe: true, guesthouse: true },
];

const RouteMap = () => {
  const [touristPosition, setTouristPosition] = useState(0);
  const [selectedVillage, setSelectedVillage] = useState<Village | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTouristPosition((prev) => (prev + 1) % villages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Map" className="h-5 w-5 text-primary" />
            Интерактивная карта маршрута
          </CardTitle>
          <CardDescription>
            Визуализация движения туристов по 6 населённым пунктам
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 min-h-[500px]">
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {villages.map((village, index) => {
                if (index < villages.length - 1) {
                  const next = villages[index + 1];
                  return (
                    <line
                      key={`line-${village.id}`}
                      x1={`${village.x}%`}
                      y1={`${village.y}%`}
                      x2={`${next.x}%`}
                      y2={`${next.y}%`}
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                      opacity="0.5"
                    />
                  );
                }
                return null;
              })}
            </svg>

            {villages.map((village, index) => {
              const isActive = index === touristPosition;
              return (
                <button
                  key={village.id}
                  onClick={() => setSelectedVillage(village)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                  style={{ left: `${village.x}%`, top: `${village.y}%` }}
                >
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        isActive
                          ? 'bg-secondary scale-125 ring-4 ring-secondary/30'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      <Icon name="Home" className="h-8 w-8 text-white" />
                    </div>
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-ping" />
                    )}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <Badge variant={isActive ? 'default' : 'secondary'} className="shadow-md">
                        {village.name}
                      </Badge>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Icon name="Users" className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Турпоток</p>
                <p className="text-2xl font-bold">450 чел/мес</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Icon name="Clock" className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm font-medium">Длительность</p>
                <p className="text-2xl font-bold">3-5 дней</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Icon name="DollarSign" className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Средний чек</p>
                <p className="text-2xl font-bold">25 000 ₽</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedVillage && (
        <Card className="lg:col-span-2 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{selectedVillage.name}</span>
              <Badge variant="secondary">{selectedVillage.excursions} экскурсии</Badge>
            </CardTitle>
            <CardDescription>Детальная информация об объекте</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Camera" className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Экскурсии</span>
                </div>
                <p className="text-2xl font-bold">{selectedVillage.excursions} программы</p>
                <p className="text-sm text-muted-foreground mt-1">~2 часа каждая</p>
              </div>
              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Coffee" className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Кафе</span>
                </div>
                <p className="text-2xl font-bold">60 мест</p>
                <p className="text-sm text-muted-foreground mt-1">Средний чек 800 ₽</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Hotel" className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Гостевой дом</span>
                </div>
                <p className="text-2xl font-bold">30 мест</p>
                <p className="text-sm text-muted-foreground mt-1">От 2 500 ₽/сутки</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RouteMap;
