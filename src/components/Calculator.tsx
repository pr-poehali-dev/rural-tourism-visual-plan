import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Calculator = () => {
  const [tourists, setTourists] = useState(10);
  const [days, setDays] = useState(3);
  const [includeExcursions, setIncludeExcursions] = useState(true);
  const [includeMeals, setIncludeMeals] = useState(true);
  const [includeAccommodation, setIncludeAccommodation] = useState(true);

  const pricePerDay = {
    accommodation: 2700,
    meals: 2400,
    excursions: 1500,
  };

  const calculateTotal = () => {
    let dailyPrice = 0;
    if (includeAccommodation) dailyPrice += pricePerDay.accommodation;
    if (includeMeals) dailyPrice += pricePerDay.meals;
    if (includeExcursions) dailyPrice += pricePerDay.excursions;
    return dailyPrice * days * tourists;
  };

  const total = calculateTotal();
  const perPerson = total / tourists;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Calculator" className="h-5 w-5 text-primary" />
            Калькулятор стоимости тура
          </CardTitle>
          <CardDescription>
            Рассчитайте примерную стоимость поездки по маршруту
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="tourists">Количество туристов</Label>
              <Badge variant="secondary">{tourists} чел</Badge>
            </div>
            <Slider
              id="tourists"
              min={1}
              max={50}
              step={1}
              value={[tourists]}
              onValueChange={(value) => setTourists(value[0])}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="days">Длительность тура</Label>
              <Badge variant="secondary">{days} дней</Badge>
            </div>
            <Slider
              id="days"
              min={1}
              max={7}
              step={1}
              value={[days]}
              onValueChange={(value) => setDays(value[0])}
              className="w-full"
            />
          </div>

          <div className="pt-4 border-t space-y-4">
            <h3 className="font-semibold">Включенные услуги</h3>
            
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted">
              <Checkbox
                id="accommodation"
                checked={includeAccommodation}
                onCheckedChange={(checked) => setIncludeAccommodation(checked as boolean)}
              />
              <div className="flex-1">
                <label
                  htmlFor="accommodation"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Проживание
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  {pricePerDay.accommodation} ₽/чел в сутки
                </p>
              </div>
              <Icon name="Hotel" className="h-5 w-5 text-primary" />
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted">
              <Checkbox
                id="meals"
                checked={includeMeals}
                onCheckedChange={(checked) => setIncludeMeals(checked as boolean)}
              />
              <div className="flex-1">
                <label
                  htmlFor="meals"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Питание (3-разовое)
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  {pricePerDay.meals} ₽/чел в сутки
                </p>
              </div>
              <Icon name="Coffee" className="h-5 w-5 text-secondary" />
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted">
              <Checkbox
                id="excursions"
                checked={includeExcursions}
                onCheckedChange={(checked) => setIncludeExcursions(checked as boolean)}
              />
              <div className="flex-1">
                <label
                  htmlFor="excursions"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Экскурсионная программа
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  {pricePerDay.excursions} ₽/чел в сутки
                </p>
              </div>
              <Icon name="Camera" className="h-5 w-5 text-accent" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:sticky lg:top-24 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Receipt" className="h-5 w-5 text-primary" />
            Итоговая стоимость
          </CardTitle>
          <CardDescription>Расчёт на {tourists} туристов на {days} дней</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Общая стоимость</p>
              <p className="text-4xl font-bold text-primary mb-4">
                {total.toLocaleString('ru-RU')} ₽
              </p>
              <div className="flex items-center justify-center gap-2">
                <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {perPerson.toLocaleString('ru-RU')} ₽ на человека
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Детализация:</h4>
            
            {includeAccommodation && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Hotel" className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Проживание</span>
                </div>
                <span className="font-semibold">
                  {(pricePerDay.accommodation * days * tourists).toLocaleString('ru-RU')} ₽
                </span>
              </div>
            )}

            {includeMeals && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Coffee" className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Питание</span>
                </div>
                <span className="font-semibold">
                  {(pricePerDay.meals * days * tourists).toLocaleString('ru-RU')} ₽
                </span>
              </div>
            )}

            {includeExcursions && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Camera" className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Экскурсии</span>
                </div>
                <span className="font-semibold">
                  {(pricePerDay.excursions * days * tourists).toLocaleString('ru-RU')} ₽
                </span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-muted-foreground mb-1">Посещено сёл</p>
                <p className="text-xl font-bold">{Math.min(days * 2, 6)}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-muted-foreground mb-1">Экскурсий</p>
                <p className="text-xl font-bold">{includeExcursions ? days * 3 : 0}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
