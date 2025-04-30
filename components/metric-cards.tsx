import { ArrowUpRight, CreditCard, Package, ShoppingCart, Wallet } from "lucide-react"
import { Draggable } from "react-beautiful-dnd"

interface MetricCardsProps {
  metricOrder: string[]
  themeColor: string
}

export function MetricCards({ metricOrder, themeColor }: MetricCardsProps) {
  const metricsData = {
    "payment-receivables": {
      title: "Payment Receivables",
      value: "₹12,40,000",
      change: "+3.87%",
      icon: Wallet,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      subtitle: "OVERDUE PAYMENTS: ₹1,40,000",
    },
    "payments-made": {
      title: "Payments Made",
      value: "₹9,50,000",
      icon: CreditCard,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      subtitle: "NEXT PAYMENT DUE: 1 WEEK",
    },
    "total-purchases": {
      title: "Total Purchases",
      value: "₹15,20,000",
      change: "+3.87%",
      icon: ShoppingCart,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      subtitle: "SUPPLIERS: 6",
    },
    "total-sales": {
      title: "Total Sales",
      value: "₹18,00,000",
      change: "+2.81%",
      icon: Package,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      subtitle: "TOP SELLING PRODUCT: ELECTRONICS",
    },
  }

  return (
    <>
      {metricOrder.map((metricId, index) => {
        const metric = metricsData[metricId as keyof typeof metricsData]
        const Icon = metric.icon

        return (
          <Draggable key={metricId} draggableId={metricId} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="bg-white border rounded-lg p-3 sm:p-4 flex justify-between cursor-move touch-manipulation"
              >
                <div>
                  <h3 className="text-gray-500 text-xs sm:text-sm">{metric.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg sm:text-2xl font-bold">{metric.value}</p>
                    {metric.change && (
                      <span className="flex items-center text-green-500 text-xs">
                        {metric.change}
                        <ArrowUpRight size={12} />
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{metric.subtitle}</p>
                </div>
                <div
                  className={`${metric.iconBg} ${metric.iconColor} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center`}
                >
                  <Icon size={16} className="sm:size-20" />
                </div>
              </div>
            )}
          </Draggable>
        )
      })}
    </>
  )
}
