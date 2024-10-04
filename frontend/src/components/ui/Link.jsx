import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import { cn } from "../../lib/utils";  


const Link = React.forwardRef(({ className, ...props }, ref) => (
  <RouterLink
    ref={ref}
    className={cn("text-primary underline-offset-4 hover:underline", className)}
    {...props}
  />
))
Link.displayName = "Link"

export { Link }