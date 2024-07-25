import { grid } from "ldrs";
grid.register()

interface LoadingProps {
    size: number;
    speed: number;
    color: string;
}

const Loading: React.FC<LoadingProps> = ({ size, speed, color }) => {
    return (
        <l-grid size={size} speed={speed} color={color} />
    );
  };

export default Loading;
