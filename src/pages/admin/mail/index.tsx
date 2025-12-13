import { useEffect, useState } from "react";
import { accounts, mails } from "./data";
import { Mail } from "./mail";

export default function MailPage() {
  const [defaultLayout, setDefaultLayout] = useState<number[] | undefined>();
  const [defaultCollapsed, setDefaultCollapsed] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    const layout = localStorage.getItem("react-resizable-panels:layout:mail");
    const collapsed = localStorage.getItem("react-resizable-panels:collapsed");

    if (layout) {
      setDefaultLayout(JSON.parse(layout));
    }

    if (collapsed) {
      setDefaultCollapsed(JSON.parse(collapsed));
    }
  }, []);

  return (
    <div className="h-screen rounded-md border">
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
}
