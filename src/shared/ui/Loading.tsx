import loadingIcon from '../../shared/icons/loading.svg';

const Loading = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-40">
        <img src={loadingIcon} alt="loading" width={52} height={52} />
        <p>Немного подождите...</p>
    </div>
  )
}

export default Loading
