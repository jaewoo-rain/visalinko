import { Role } from "../../api/adminConsultation";
import { formatDate, joinPhone } from "../../utils/adminFormat";
import AdminJsonViewer from "./AdminJsonViewer";

export default function AdminDetailPanel({
    role,
    selectedId,
    loading,
    detail,
}: {
    role: Role;
    selectedId: string | null;
    loading: boolean;
    detail: any | null;
}) {
    return (
        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b">
                <div className="font-bold">상세</div>
                <div className="text-xs text-gray-500 mt-1">
                    {selectedId ? `ID: ${selectedId}` : "목록에서 한 항목을 선택하세요"}
                </div>
            </div>

            <div className="p-4">
                {loading ? (
                    <div className="text-gray-500">불러오는 중...</div>
                ) : !detail ? (
                    <div className="text-gray-500">선택된 항목 없음</div>
                ) : (
                    <div className="space-y-4">
                        {role === "employer" ? (
                            <div className="space-y-2">
                                <div className="text-lg font-extrabold">{detail?.basicInfo?.companyName || "-"}</div>
                                <div className="text-sm text-gray-600">
                                    대표: {detail?.basicInfo?.ceoName || "-"} / 사업자번호:{" "}
                                    {detail?.basicInfo?.bizRegNumber || "-"}
                                </div>
                                <div className="text-sm text-gray-600">
                                    담당자: {detail?.basicInfo?.managerName || "-"} /{" "}
                                    {detail?.basicInfo?.managerEmailId && detail?.basicInfo?.managerEmailDomain
                                        ? `${detail.basicInfo.managerEmailId}@${detail.basicInfo.managerEmailDomain}`
                                        : "-"}
                                </div>
                                <div className="text-sm text-gray-600">
                                    연락처:{" "}
                                    {joinPhone([
                                        detail?.basicInfo?.phone1,
                                        detail?.basicInfo?.phone2,
                                        detail?.basicInfo?.phone3,
                                    ])}
                                </div>
                                <div className="text-sm text-gray-600">신청일: {formatDate(detail?.createdAt)}</div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <div className="text-lg font-extrabold">{detail?.basicInfo?.name || "-"}</div>
                                <div className="text-sm text-gray-600">
                                    생년월일:{" "}
                                    {detail?.basicInfo?.birth
                                        ? `${detail.basicInfo.birth.year}-${detail.basicInfo.birth.month}-${detail.basicInfo.birth.day}`
                                        : "-"}
                                    {" / "}
                                    성별: {detail?.basicInfo?.gender || "-"}
                                </div>
                                <div className="text-sm text-gray-600">
                                    연락처:{" "}
                                    {detail?.basicInfo?.phone
                                        ? joinPhone([detail.basicInfo.phone.p1, detail.basicInfo.phone.p2, detail.basicInfo.phone.p3])
                                        : "-"}
                                </div>
                                <div className="text-sm text-gray-600">
                                    국적: {detail?.consultation?.country?.label || "-"} / 언어:{" "}
                                    {detail?.consultation?.lang?.label || "-"}
                                </div>
                                <div className="text-sm text-gray-600">
                                    채널: {detail?.consultation?.channel || "-"} / 링크:{" "}
                                    {detail?.consultation?.channelLink || "-"}
                                </div>
                                <div className="text-sm text-gray-600">신청일: {formatDate(detail?.createdAt)}</div>
                            </div>
                        )}

                        <div>
                            <div className="text-sm font-bold mb-2">Raw JSON</div>
                            <AdminJsonViewer data={detail} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
