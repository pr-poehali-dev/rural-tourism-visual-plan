import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Statistics = () => {
  const monthlyStats = {
    tourists: 450,
    revenue: 11250000,
    occupancyCafe: 75,
    occupancyHotel: 82,
    excursionsBooked: 1350,
  };

  const yearlyProjection = {
    tourists: 5400,
    revenue: 135000000,
    profitMargin: 35,
    breakEvenMonths: 18,
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="TrendingUp" className="h-5 w-5 text-primary" />
            Ключевые показатели эффективности
          </CardTitle>
          <CardDescription>Данные за текущий месяц</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Турпоток</span>
                <Icon name="Users" className="h-4 w-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">{monthlyStats.tourists} чел</p>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-muted-foreground">85% от плана</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Выручка</span>
                <Icon name="DollarSign" className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-3xl font-bold">
                {(monthlyStats.revenue / 1000000).toFixed(1)} млн ₽
              </p>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-muted-foreground">92% от плана</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Загрузка кафе</span>
                <Icon name="Coffee" className="h-4 w-4 text-accent" />
              </div>
              <p className="text-3xl font-bold">{monthlyStats.occupancyCafe}%</p>
              <Progress value={monthlyStats.occupancyCafe} className="h-2" />
              <p className="text-xs text-muted-foreground">В среднем по объектам</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Загрузка отелей</span>
                <Icon name="Hotel" className="h-4 w-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">{monthlyStats.occupancyHotel}%</p>
              <Progress value={monthlyStats.occupancyHotel} className="h-2" />
              <p className="text-xs text-muted-foreground">180 мест всего</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Экскурсии</span>
                <Icon name="Camera" className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-3xl font-bold">{monthlyStats.excursionsBooked}</p>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">18 программ доступно</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Средний чек</span>
                <Icon name="Wallet" className="h-4 w-4 text-accent" />
              </div>
              <p className="text-3xl font-bold">25 000 ₽</p>
              <Progress value={88} className="h-2" />
              <p className="text-xs text-muted-foreground">На 1 туриста</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BarChart3" className="h-5 w-5 text-primary" />
            Годовой прогноз
          </CardTitle>
          <CardDescription>Финансовые показатели проекта</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Icon name="TrendingUp" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Годовая выручка</p>
                  <p className="text-3xl font-bold">
                    {(yearlyProjection.revenue / 1000000).toFixed(0)} млн ₽
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Туристов в год</span>
                  <span className="font-semibold">{yearlyProjection.tourists}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Рентабельность</span>
                  <span className="font-semibold">{yearlyProjection.profitMargin}%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Icon name="Target" className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Окупаемость</p>
                  <p className="text-3xl font-bold">{yearlyProjection.breakEvenMonths} мес</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Инвестиции</span>
                  <span className="font-semibold">85 млн ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Чистая прибыль (год)</span>
                  <span className="font-semibold">47 млн ₽</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="PieChart" className="h-4 w-4" />
              Структура выручки
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Проживание</span>
                  <span className="font-semibold">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Питание</span>
                  <span className="font-semibold">30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Экскурсии</span>
                  <span className="font-semibold">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
