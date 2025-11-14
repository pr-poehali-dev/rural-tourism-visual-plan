import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import RouteMap from '@/components/RouteMap';
import Calculator from '@/components/Calculator';
import Statistics from '@/components/Statistics';
import ObjectsCatalog from '@/components/ObjectsCatalog';

const Index = () => {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Icon name="MapPin" className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Сельский Турмаршрут</h1>
                <p className="text-sm text-muted-foreground">Визуальный бизнес-план</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Icon name="TrendingUp" className="h-4 w-4 mr-2" />
              6 объектов • 18 экскурсий
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="map" className="gap-2">
              <Icon name="Map" className="h-4 w-4" />
              <span className="hidden sm:inline">Карта маршрута</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="gap-2">
              <Icon name="BarChart3" className="h-4 w-4" />
              <span className="hidden sm:inline">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="catalog" className="gap-2">
              <Icon name="Building2" className="h-4 w-4" />
              <span className="hidden sm:inline">Каталог</span>
            </TabsTrigger>
            <TabsTrigger value="calculator" className="gap-2">
              <Icon name="Calculator" className="h-4 w-4" />
              <span className="hidden sm:inline">Калькулятор</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-6">
            <RouteMap />
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <Statistics />
          </TabsContent>

          <TabsContent value="catalog" className="space-y-6">
            <ObjectsCatalog />
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Calculator />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16 py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Интерактивный бизнес-план сельского туристического маршрута • 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
