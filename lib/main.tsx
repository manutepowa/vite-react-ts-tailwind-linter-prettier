export const MyComponent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="bg-gray-300 flex flex-col p-8 m-8">
      <h1>This image is a component library</h1>
      <img src={imageUrl} alt="HI" />
    </div>
  )
}
