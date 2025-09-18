export default function SignIn(){
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign in</h2>
      <input className="w-full mb-3 px-3 py-2 border rounded" placeholder="Email" />
      <input className="w-full mb-3 px-3 py-2 border rounded" placeholder="Password" />
      <button className="w-full bg-yellow-400 py-2 rounded font-semibold">Sign in</button>
    </div>
  )
}
