"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { useTranslations } from "next-intl"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function AdminDashboard() {
  const t = useTranslations("dashboard.overview")

  const data = [
    { name: t("charts.overview.groups.groupA"), value: 400 },
    { name: t("charts.overview.groups.groupB"), value: 300 },
    { name: t("charts.overview.groups.groupC"), value: 300 },
    { name: t("charts.overview.groups.groupD"), value: 200 },
  ]

  return (
    <div className="w-full w-[1200px] mx-auto">
      <div className="">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">{t("tabs.overview")}</TabsTrigger>
            <TabsTrigger value="analytics">{t("tabs.analytics")}</TabsTrigger>
            <TabsTrigger value="reports">{t("tabs.reports")}</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("cards.revenue.title")}</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">{t("cards.revenue.change")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("cards.subscriptions.title")}</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">{t("cards.subscriptions.change")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("cards.sales.title")}</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">{t("cards.sales.change")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t("cards.activeNow.title")}</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">{t("cards.activeNow.change")}</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>{t("charts.overview.title")}</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 mb-4">
                  <ChartContainer
                    config={{
                      [t("charts.overview.groups.groupA")]: {
                        label: t("charts.overview.groups.groupA"),
                        color: COLORS[0],
                      },
                      [t("charts.overview.groups.groupB")]: {
                        label: t("charts.overview.groups.groupB"),
                        color: COLORS[1],
                      },
                      [t("charts.overview.groups.groupC")]: {
                        label: t("charts.overview.groups.groupC"),
                        color: COLORS[2],
                      },
                      [t("charts.overview.groups.groupD")]: {
                        label: t("charts.overview.groups.groupD"),
                        color: COLORS[3],
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>{t("charts.activities.title")}</CardTitle>
                  <CardDescription>{t("charts.activities.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Olivia Martin</p>
                        <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Jackson Lee</p>
                        <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                        <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$299.00</div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">William Kim</p>
                        <p className="text-sm text-muted-foreground">will@email.com</p>
                      </div>
                      <div className="ml-auto font-medium">+$99.00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

