const RenderOnViewPortEntryWrapper = ({
  children,
  ref,
}) => {
  return (
    <div style={{ padding: '100px' }} ref={ref}>
      {children}
    </div>
  )
}

export default RenderOnViewPortEntryWrapper;
