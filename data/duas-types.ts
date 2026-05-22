export interface DuaItem {
  text: string;
  /** للقرآن: مرجع السورة يظهر مباشرة */
  hint?: string;
  /** للسنة والصحابة: الراوي والحديث كامل — يُفتح بسهم */
  source?: string;
}

export interface DuaCategory {
  id: string;
  title: string;
  duas: DuaItem[];
}
