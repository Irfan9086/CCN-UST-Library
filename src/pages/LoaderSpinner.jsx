import { RotatingLines } from "react-loader-spinner";


export default function LoaderSpinner() {
  return (
    <div>
        <RotatingLines strokeColor="grey" strokeWidth="3" width="50" />;
    </div>
  )
}
