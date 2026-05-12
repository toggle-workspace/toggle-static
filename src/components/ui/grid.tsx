export function SideCol({ wide }: { wide?: boolean }) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}
    >
      <div aria-hidden="true" className={`p-[0.5px]${wide ? " w-full" : ""}`}>
        <div className="bg-card/90 h-full w-2 rounded md:w-6 lg:w-full" />
      </div>
    </div>
  );
}

export function GridRow({
  children,
  plain,
  ariaHidden,
}: {
  children: React.ReactNode;
  plain?: boolean;
  ariaHidden?: boolean;
}) {
  if (plain) {
    return (
      <div
        aria-hidden={ariaHidden}
        className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]"
      >
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
          <div data-slot="content" className="bg-card/90 h-full rounded">
            {children}
          </div>
        </div>
        <SideCol />
      </div>
    );
  }
  return (
    <div
      aria-hidden={ariaHidden}
      className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]"
    >
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
          {children}
        </div>
      </div>
      <SideCol />
    </div>
  );
}

export function Spacer() {
  return (
    <div
      aria-hidden="true"
      className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]"
    >
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
        <div data-slot="content" className="bg-card/90 h-full rounded">
          <div className="h-16" />
        </div>
      </div>
      <SideCol />
    </div>
  );
}
