import { ReactNode, ComponentType, JSX } from 'react';

type ProviderProps = Record<string, unknown>;
type ProviderComponent = ComponentType<ProviderProps> | JSX.ElementType;

type ComponentWithProps = [ProviderComponent, ProviderProps?];

export const buildProvidersTree = (
  componentsWithProps: ComponentWithProps[],
): ComponentType<{ children?: ReactNode }> => {
  const initialComponent = ({ children }: { children?: ReactNode }) => children;

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  )!;
};
