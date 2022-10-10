import { 
  Taskbar, 
  Desktop 
} from "./workbench/components";

export const WorkbenchApp = () => {
  return (
    <div className="container">
      <Taskbar />
      <Desktop />
    </div>
  );
};
