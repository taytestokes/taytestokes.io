const Pre = ({ children }) => (
  <pre className="p-4 bg-gray-100 mt-4 overflow-auto">{children}</pre>
)

const P = ({ children }) => <p className="mt-4 ">{children}</p>

// TODO: Figure out how I want to go about styling the MDX content?

export default {
  pre: Pre,
  p: P
}
