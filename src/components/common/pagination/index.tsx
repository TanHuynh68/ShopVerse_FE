import { useId } from "react";

import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { paginationProducts } from "@/hooks/api/useProduct";

interface PaginationComponentProps {
  setPagination: (values: paginationProducts) => void;
  pagination: paginationProducts;
  totalPages: number;
  numberOfItems: string;
}

const PaginationComponent = ({
  pagination,
  totalPages,
  setPagination,
  numberOfItems,
}: PaginationComponentProps) => {
  const id = useId();
  const items = [];
  for (let i = 0; i < totalPages; i++) {
    items.push(i + 1);
  }
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-6 max-sm:justify-center">
      <div className="flex shrink-0 items-center gap-3">
        <Label htmlFor={id}>Sản phẩm trên mỗi trang</Label>
        <Select
          value={pagination.size + ""}
          defaultValue="8"
          onValueChange={(value) =>
            setPagination({ ...pagination, size: parseInt(value), page: 1 })
          }
        >
          <SelectTrigger id={id} className="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent className="[&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto">
            {/* <SelectItem value="2">2</SelectItem> */}
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="12">12</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-muted-foreground flex grow items-center justify-start whitespace-nowrap max-sm:justify-center">
        <p
          className="text-muted-foreground text-sm whitespace-nowrap"
          aria-live="polite"
        >
          {numberOfItems}
        </p>
      </div>
      <Pagination className="w-fit max-sm:mx-0">
        <PaginationContent>
          <PaginationItem
            hidden={pagination.page === 1 ? true : false}
            onClick={() => setPagination({ ...pagination, page: 1 })}
          >
            <PaginationLink
              aria-label="Go to first page"
              size="icon"
              className="rounded-full"
            >
              <ChevronFirstIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            hidden={pagination.page === 1 ? true : false}
            onClick={() =>
              setPagination({ ...pagination, page: pagination.page - 1 })
            }
          >
            <PaginationLink
              aria-label="Go to previous page"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          {items.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setPagination({ ...pagination, page: page })}
                isActive={page === pagination.page}
                className="rounded-full"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {/* <PaginationItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <PaginationEllipsis />
              </TooltipTrigger>
              <TooltipContent>
                <p>2 other pages</p>
              </TooltipContent>
            </Tooltip>
          </PaginationItem> */}
          <PaginationItem
            hidden={pagination.page === totalPages ? true : false}
            onClick={() =>
              setPagination({ ...pagination, page: pagination.page + 1 })
            }
          >
            <PaginationLink
              aria-label="Go to next page"
              size="icon"
              className="rounded-full"
            >
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            onClick={() => setPagination({ ...pagination, page: totalPages })}
            hidden={pagination.page === totalPages ? true : false}
          >
            <PaginationLink
              aria-label="Go to last page"
              size="icon"
              className="rounded-full"
            >
              <ChevronLastIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
