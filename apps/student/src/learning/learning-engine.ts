import {buildLearningRecommendations} from "../revision";
import type {LearningRecommendation,RevisionItem,WeakArea} from "../revision";
export function getNextLearningActions(weakAreas:WeakArea[],revisionItems:RevisionItem[],recentChapter?:{subject:"Physics"|"Chemistry"|"Biology";chapter:string}):LearningRecommendation[]{return buildLearningRecommendations(weakAreas,revisionItems,recentChapter)}