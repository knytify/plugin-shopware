<?php

declare(strict_types=1);

namespace Knytify\Handler;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;


use Shopware\Storefront\Page\PageLoadedEvent;
use Shopware\Storefront\Pagelet\Header\HeaderPageletLoadedEvent;

use Shopware\Core\Framework\Struct\ArrayEntity;


use Shopware\Core\System\SystemConfig\SystemConfigService;



class Example implements EventSubscriberInterface
{
    private SystemConfigService $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }
    public static function getSubscribedEvents(): array
    {
        return [
            HeaderPageletLoadedEvent::class => 'onHeaderLoad'
        ];
    }


    public function onHeaderLoad(HeaderPageletLoadedEvent $event): void
    {
        $exampleConfig = $this->systemConfigService->get('Knytify.config.secret');

        $event->getPagelet()->addExtension('example_var', new ArrayEntity(['value' => $exampleConfig]));
    }
}
