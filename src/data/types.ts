export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface WorkCaseItem {
  id: string;
  number: string;
  title: string;
  vehicle: string;
  category: string;
  issue: string;
  diagnostic: string;
  solution: string;
  stats: {
    initialTemp: string;
    finalTemp: string;
    duration: string;
    pressureDelta: string;
  };
  summary: string;
}
