import {Button, Card, Empty, Kv} from '../../ui/ui';
import {useT} from '../../i18n';
import type {GeodataCard} from './view';

// The geosite answer beside the DNS one: a find names every category holding
// the domain, a show lists the category's entries. A find row leads back into
// the same form as a category listing.
export function GeoResults({cards, onShow}: {cards: GeodataCard[]; onShow: (code: string) => void}) {
  const t = useT();
  if (cards.length === 0) return null;
  return (
    <div className="rp-col">
      {cards.map(card => (
        <Card key={card.id} className="rp-col">
          <div className="rp-row">
            <div className="rp-cluster">
              <h2 className="rp-h3">{card.title}</h2>
            </div>
          </div>
          <Kv inline items={card.fields} />
          {card.rows.length ? (
            <div className="rp-list">
              {card.rows.map(row => (
                <div key={row.id} className="rp-dns-answer">
                  <span className="rp-code">{row.value}</span>
                  <span className="meta">
                    {row.code && <span>{row.code}</span>}
                    {row.type && <span>{row.type}</span>}
                    {row.attrs && <span>{row.attrs}</span>}
                  </span>
                  {row.code && (
                    <Button quiet small onPress={() => onShow(row.code!)}>
                      {t('dns.geodataShowEntries')}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Empty>{card.empty}</Empty>
          )}
        </Card>
      ))}
    </div>
  );
}
